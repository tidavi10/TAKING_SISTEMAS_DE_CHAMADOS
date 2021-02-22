package taking.api.model;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import taking.api.repository.TipoProblemaRepository;

@Configuration
public class TipoProblemaDados implements CommandLineRunner{
	
	@Autowired
	private TipoProblemaRepository tipoProblemaRepository;
	
	@Override
	public void run(String... args) throws Exception {
		
		TipoProblema tipos1 = new TipoProblema("Reset de senha", "Suporte");
		TipoProblema tipos2 = new TipoProblema("Problema na máquina", "Infra");
		TipoProblema tipos3 = new TipoProblema("Criação de email", "Suporte");
		TipoProblema tipos4 = new TipoProblema("Liberação de acesso ao Bitrix", "Suporte");
		
		tipoProblemaRepository.saveAll(Arrays.asList(tipos1, tipos2, tipos3, tipos4));
	}
}
