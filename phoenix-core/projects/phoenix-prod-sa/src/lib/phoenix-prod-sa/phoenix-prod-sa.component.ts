import { Component, OnInit } from '@angular/core';
import { SecurityAdvisor, PasswordManager, WindowsHello } from '@lenovo/tan-client-bridge';
import { PhoenixProdSaService } from '../phoenix-prod-sa.service';

@Component({
  selector: 'lib-phoenix-prod-sa',
  templateUrl: './phoenix-prod-sa.component.html',
  styleUrls: ['./phoenix-prod-sa.component.css']
})
export class PhoenixProdSaComponent implements OnInit {

  securityAdvisor: SecurityAdvisor;
  password: PasswordManager;
  windowsHello: WindowsHello;

  constructor(vantageShellService: PhoenixProdSaService) {
    this.securityAdvisor = vantageShellService.getSecurityAdvisor();
    if (this.securityAdvisor) {
      this.password = this.securityAdvisor.passwordManager;
      this.windowsHello = this.securityAdvisor.windowsHello;
    }
  }

  ngOnInit() {
    this.securityAdvisor.refresh();
  }
}
