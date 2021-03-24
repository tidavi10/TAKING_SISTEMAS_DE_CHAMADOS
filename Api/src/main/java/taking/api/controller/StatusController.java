package taking.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import taking.api.model.Status;
import taking.api.service.StatusService;

@RestController
@RequestMapping(value = "/status")
public class StatusController {

	@Autowired
	private StatusService statusService;
	
	@GetMapping
	public ResponseEntity<List<Status>> listaDeStatus(){
		return statusService.getStatus();
	}
}
