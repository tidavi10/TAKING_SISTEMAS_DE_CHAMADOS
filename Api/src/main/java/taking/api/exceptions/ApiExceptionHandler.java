package taking.api.exceptions;

import java.time.ZoneId;
import java.time.ZonedDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ApiExceptionHandler {

	@ExceptionHandler(value = {BadRequestException.class})
	public ResponseEntity<Object> handlerBadRequestException(BadRequestException e) {
		
		ApiException apiException = new ApiException(e.getMessage());
		
		return new ResponseEntity<>(apiException, HttpStatus.BAD_REQUEST);
	}
	
	@ExceptionHandler(value = {NotFoundException.class})
	public ResponseEntity<Object> handlerNotFoundException(NotFoundException e) {
		
		ApiException apiException = new ApiException(e.getMessage());
		
		return new ResponseEntity<>(apiException, HttpStatus.NOT_FOUND);
	}
}