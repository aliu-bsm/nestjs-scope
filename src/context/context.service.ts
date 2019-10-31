import { Injectable, Scope } from '@nestjs/common';

@Injectable({
  scope: Scope.REQUEST,
})
export class ContextService {
  private context;

  setContext(obj: any): void {
    this.context = obj;
  }

  getContext(): any {
    return this.context;
  }
}
