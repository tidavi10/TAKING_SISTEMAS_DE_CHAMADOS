package taking.api.exceptions;

import javax.annotation.Generated;

public class ErrorDetails {
	private String title;
	private int status;
	private String detail;
	private long timestamp;
	private String devMessage;
	
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public String getDetail() {
		return detail;
	}
	public void setDetail(String detail) {
		this.detail = detail;
	}
	public long getTimestamp() {
		return timestamp;
	}
	public void setTimestamp(long timestamp) {
		this.timestamp = timestamp;
	}
	public String getDevMessage() {
		return devMessage;
	}
	public void setDevMessage(String devMessage) {
		this.devMessage = devMessage;
	}
	/**
	 * Creates builder to build {@link ErrorDetails}.
	 * @return created builder
	 */
	@Generated("SparkTools")
	public static Builder newBuilder() {
		return new Builder();
	}
	/**
	 * Builder to build {@link ErrorDetails}.
	 */
	@Generated("SparkTools")
	public static final class Builder {
		private String title;
		private int status;
		private String detail;
		private long timestamp;
		private String devMessage;

		private Builder() {
		}

		public Builder title(String title) {
			this.title = title;
			return this;
		}

		public Builder status(int status) {
			this.status = status;
			return this;
		}

		public Builder detail(String detail) {
			this.detail = detail;
			return this;
		}

		public Builder timestamp(long timestamp) {
			this.timestamp = timestamp;
			return this;
		}

		public Builder devMessage(String devMessage) {
			this.devMessage = devMessage;
			return this;
		}

		public ErrorDetails build() {
			ErrorDetails errorDetails = new ErrorDetails();
			errorDetails.setTitle(title);
			errorDetails.setStatus(status);
			errorDetails.setDetail(detail);
			errorDetails.setTimestamp(timestamp);
			errorDetails.setDevMessage(devMessage);
			return errorDetails;
		}
	}
	
}
