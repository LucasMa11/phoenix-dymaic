import { Injectable } from '@angular/core';
import * as inversify from 'inversify';
import * as Phoenix from '@lenovo/tan-client-bridge';

@Injectable({
  providedIn: 'root'
})
export class PhoenixProdSaService {

  private phoenix: any;
  private shell: any;
  constructor() {
    this.shell = this.getVantageShell();
    if (this.shell) {
      const metricClient = this.shell.MetricsClient ? new this.shell.MetricsClient() : null;
      const powerClient = this.shell.PowerClient ? this.shell.PowerClient() : null;
      this.phoenix = Phoenix.default(new inversify.Container(), {
        metricsBroker: metricClient,
        hsaPowerBroker: powerClient,
        hsaDolbyBroker: this.shell.DolbyRpcClient ? this.shell.DolbyRpcClient.instance : null,
        hsaForteBroker: this.shell.ForteRpcClient ? this.shell.ForteRpcClient.getInstance() : null
      });
    }
  }

  private getVantageShell(): any {
    const win: any = window;
    return win.VantageShellExtension;
  }

  public getSecurityAdvisor(): Phoenix.SecurityAdvisor {
    if (this.phoenix) {
      return this.phoenix.securityAdvisor;
    }
    return undefined;
  }
}
