package taking.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import taking.api.exceptions.BadRequestException;
import taking.api.exceptions.NotFoundException;
import taking.api.model.Status;
import taking.api.model.TipoProblema;
import taking.api.repository.StatusRepository;

@Service
public class StatusService {

	@Autowired
	private StatusRepository statusRepository;
	
	public ResponseEntity<List<Status>> getStatus(){
		List<Status> list = statusRepository.findAll();
		if(list.isEmpty()) {
			throw new NotFoundException("Status não encontrado");
		}
		return ResponseEntity.ok().body(list);
	}
	
}
