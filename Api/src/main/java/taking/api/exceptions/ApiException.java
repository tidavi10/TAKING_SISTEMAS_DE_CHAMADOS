package taking.api.exceptions;

import java.time.ZonedDateTime;

import org.springframework.http.HttpStatus;

public class ApiException {
	private final String message;
	
	public ApiException(String message) {
		this.message = message;
	}

	public String getMessage() {
		return message;
	}
	
}
