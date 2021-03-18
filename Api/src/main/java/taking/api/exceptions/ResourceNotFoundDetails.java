package taking.api.exceptions;

import javax.annotation.Generated;

public class ResourceNotFoundDetails {
	private String title;
	private int status;
	private String detail;
	private long timestamp;
	private String devMessage;

	@Generated("SparkTools")
	private ResourceNotFoundDetails(Builder builder) {
		this.title = builder.title;
		this.status = builder.status;
		this.detail = builder.detail;
		this.timestamp = builder.timestamp;
		this.devMessage = builder.devMessage;
	}
	
	private ResourceNotFoundDetails() {
	}

	public String getTitle() {
		return title;
	}

	public int getStatus() {
		return status;
	}

	public String getDetail() {
		return detail;
	}

	public long getTimestamp() {
		return timestamp;
	}

	public String getDevMessage() {
		return devMessage;
	}

	/**
	 * Creates builder to build {@link ResourceNotFoundDetails}.
	 * @return created builder
	 */
	@Generated("SparkTools")
	public static Builder newBuilder() {
		return new Builder();
	}

	/**
	 * Builder to build {@link ResourceNotFoundDetails}.
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

		public ResourceNotFoundDetails build() {
			return new ResourceNotFoundDetails(this);
		}
	}
	
	
	
}
