package taking.api.oauth2;

import taking.api.repository.UsuariosRepository;
import taking.api.oauth2.GoogleOAuth2UserInfo;
import taking.api.model.Usuarios;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.oauth2.client.oidc.userinfo.OidcUserRequest;
import org.springframework.security.oauth2.client.oidc.userinfo.OidcUserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class CustomOidcUserService extends OidcUserService {

    @Autowired
    private UsuariosRepository usuariosRepository;

    @Override
    public OidcUser loadUser(OidcUserRequest userRequest) throws OAuth2AuthenticationException {
        OidcUser oidcUser = super.loadUser(userRequest);
        Map<String, Object> attributes = oidcUser.getAttributes();
        GoogleOAuth2UserInfo userInfo = new GoogleOAuth2UserInfo();
        userInfo.setEmail((String) attributes.get("email"));
        userInfo.setName((String) attributes.get("name"));
        updateUser(userInfo);

        return oidcUser;
    }

    private void updateUser(GoogleOAuth2UserInfo userInfo) {
        Usuarios user = usuariosRepository.findByEmail(userInfo.getEmail());
        if(user == null) {
            user = new Usuarios();
        }
        user.setEmail(userInfo.getEmail());
        user.setNome(userInfo.getName());
        user.setCpf(".");
        user.setCargo(".");
        user.setRg(".");
        user.setSenha(".");
        user.setEndereco(".");
        user.setCep(".");
        usuariosRepository.save(user);
    }
}
