import { ENDPOINTS } from './constants'
import { Settings, ObsologEvent } from './types'
import { HTTPResponseError } from './error'

export default class Obsolog {
  private readonly token: string

  constructor({ token }: Settings) {
    this.token = token
  }

  private createFetchHeaders() {
    return {
      'Content-Type': 'application/json',
      'x-obsolog-token': this.token
    }
  }

  public async trackEvent(event: ObsologEvent) {
    const method = 'POST'
    const headers = this.createFetchHeaders()
    const body = JSON.stringify(event)

    const res = await fetch(ENDPOINTS.EVENT, { method, headers, body })
    if (!res.ok) {
      throw new HTTPResponseError(res.status, res.statusText, await res.json())
    }

    return true
  }
}

export type { ObsologEvent }
