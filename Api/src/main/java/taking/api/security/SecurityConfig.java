package taking.api.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.ApplicationContextAware;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.client.oidc.userinfo.OidcUserService;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.google.common.collect.ImmutableList;

import taking.api.config.JwtAuthenticationEntryPoint;
//import taking.api.controller.Filter.AdmJwtRequestFilter;
import taking.api.controller.Filter.JwtRequestFilter;
import taking.api.oauth2.CustomAuthenticationSuccessHandler;
//import taking.api.service.AdmDetailsService;
import taking.api.service.JwtUserDetailsService;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	/*@Bean
	CorsConfigurationSource corsConfigurationSource() {
		final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", new CorsConfiguration().applyPermitDefaultValues());
		return source;
	}*/
	
	@Bean
	public CorsConfigurationSource corsConfigurationSource() {
	    final CorsConfiguration configuration = new CorsConfiguration();
	    configuration.setAllowedOrigins(ImmutableList.of("*"));
	    configuration.setAllowedMethods(ImmutableList.of("HEAD",
	            "GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"));
	    configuration.setAllowCredentials(true);
	    configuration.setAllowedHeaders(ImmutableList.of("*"));
	    configuration.setExposedHeaders(ImmutableList.of("Authorization","Access-Control-Allow-Origin","Access-Control-Allow-Credentials"));
	    final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	    source.registerCorsConfiguration("/**", configuration);
	    return source;
	}

	@Configuration
	@Order(1)
	public static class UserSecurityConfiguration extends WebSecurityConfigurerAdapter
			implements ApplicationContextAware {

		@Autowired
		private OidcUserService oidcUserService;

		@Autowired
		private CustomAuthenticationSuccessHandler customAuthenticationSuccessHandler;

		@Autowired
		private JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;

		@Autowired
		private JwtRequestFilter jwtRequestFilter;

		private BCryptPasswordEncoder bCryptPasswordEncoder;
		private JwtUserDetailsService userDetailsService;
		private static final String[] AUTH_WHITELIST = { "/v2/api-docs", "/auth/**", "/swagger-resources",
				"/swagger-resources/**", "/configuration/ui", "/configuration/security", "/swagger-ui.html",
				"/webjars/**" };

		public UserSecurityConfiguration(JwtUserDetailsService userDetailsService,
				BCryptPasswordEncoder bCryptPasswordEncoder) {
			this.bCryptPasswordEncoder = bCryptPasswordEncoder;
			this.userDetailsService = userDetailsService;
		}

		@Override
		protected void configure(HttpSecurity httpSecurity) throws Exception {
			httpSecurity.cors().and().csrf().disable().authorizeRequests().antMatchers(AUTH_WHITELIST).permitAll()
					//.antMatchers("/chamados/adm/**", "/resolucao/**").hasRole("ADM")
					.antMatchers(HttpMethod.OPTIONS, "**").permitAll()
					.antMatchers(HttpMethod.POST, "/usuarios/cadastro", "/loginsocial/cadastrogmail", "/usuariosadm/cadastro", 
							"/authenticate", "/admAuth")
					.permitAll()
					.and()
					.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class)
					.authorizeRequests()
					.anyRequest().authenticated();

			// .and()
			// .oauth2Login()
			// .redirectionEndpoint()
			// .baseUri("/oauth2/callback/*")
			// .and()
			// .userInfoEndpoint()
			// .oidcUserService(oidcUserService)
			// .and()
			// .authorizationEndpoint()
			// .baseUri("/oauth2/authorize")
			// .and()
			// .successHandler(customAuthenticationSuccessHandler);

		}

		/**
		 * protected void configure(HttpSecurity httpSecurity) throws Exception {
		 * httpSecurity.cors().and().csrf().disable().authorizeRequests().antMatchers(AUTH_WHITELIST).permitAll()
		 * .antMatchers(HttpMethod.POST, "/usuarios/cadastro", "/authenticate",
		 * "/usuariosadm/cadastro").permitAll().anyRequest() .authenticated().and()
		 * .oauth2Login(); //.and()
		 * //.successHandler(customAuthenticationSuccessHandler);
		 * 
		 * httpSecurity.addFilterBefore(jwtRequestFilter,
		 * UsernamePasswordAuthenticationFilter.class); }
		 **/

		public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
			authenticationManagerBuilder.userDetailsService(userDetailsService)
					.passwordEncoder(bCryptPasswordEncoder);
		}

		@Bean
		@Override
		protected AuthenticationManager authenticationManager() throws Exception {
			return super.authenticationManager();
		}
	}

	/*@Configuration
	@Order(2)
	public static class AdmSecurityConfiguration extends WebSecurityConfigurerAdapter
			implements ApplicationContextAware {

		private BCryptPasswordEncoder bCryptPasswordEncoder;
		private AdmDetailsService admDetailsService;
		private JwtUserDetailsService userDetailsService;

		@Autowired
		private AdmJwtRequestFilter admJwtRequestFilter;

		public AdmSecurityConfiguration(AdmDetailsService userDetailsService,
				BCryptPasswordEncoder bCryptPasswordEncoder) {
			this.bCryptPasswordEncoder = bCryptPasswordEncoder;
			this.admDetailsService = userDetailsService;
		}

		@Override
		protected void configure(HttpSecurity httpSecurity) throws Exception {

			httpSecurity
			.addFilterBefore(admJwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
		}

		public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
			authenticationManagerBuilder.userDetailsService(admDetailsService).passwordEncoder(bCryptPasswordEncoder);
		}

	}*/
}