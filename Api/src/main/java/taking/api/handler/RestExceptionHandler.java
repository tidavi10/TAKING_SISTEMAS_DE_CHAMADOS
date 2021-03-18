package taking.api.handler;

import java.util.Date;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import taking.api.exceptions.ResourceNotFoundDetails;
import taking.api.exceptions.ResourceNotFoundException;

@ControllerAdvice
public class RestExceptionHandler extends ResponseEntityExceptionHandler{

	@ExceptionHandler(ResourceNotFoundException.class)
	public ResponseEntity<?> handleResourceNotFoundException(ResourceNotFoundException rnfException){
		ResourceNotFoundDetails rnfDetails = ResourceNotFoundDetails.newBuilder()
								.timestamp(new Date().getTime())
								.status(HttpStatus.NOT_FOUND.value())
								.title("Recurso não encontrado")
								.detail(rnfException.getMessage())
								.devMessage(rnfException.getClass().getName())
								.build();
		return new ResponseEntity<>(rnfDetails, HttpStatus.NOT_FOUND);
	}
}
