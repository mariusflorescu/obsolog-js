export class HTTPResponseError extends Error {
  public readonly status: number
  public readonly statusText: string
  public readonly body: unknown | undefined

  constructor(status: number, statusText: string, body: unknown | undefined) {
    super(`HTTP Error Response: ${status} ${statusText}`)
    this.status = status
    this.statusText = statusText
    this.body = body
  }

  /**
   * Get Error Info as JSON
   */
  toJSON() {
    return {
      status: this.status,
      statusText: this.statusText,
      body: this.body
    }
  }
}
