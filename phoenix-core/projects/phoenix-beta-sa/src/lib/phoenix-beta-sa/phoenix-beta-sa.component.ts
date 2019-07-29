import { Component, OnInit } from '@angular/core';
import { PhoenixBetaSaService } from '../phoenix-beta-sa.service';
import { SecurityAdvisor, PasswordManager, Vpn, WindowsHello } from '@lenovo/tan-client-bridge';

@Component({
  selector: 'lib-phoenix-beta-sa',
  templateUrl: './phoenix-beta-sa.component.html',
  styleUrls: ['./phoenix-beta-sa.component.css']
})
export class PhoenixBetaSaComponent implements OnInit {

  securityAdvisor: SecurityAdvisor;
  password: PasswordManager;
  vpn: Vpn;
  windowsHello: WindowsHello;

  constructor(vantageShellService: PhoenixBetaSaService) {
    this.securityAdvisor = vantageShellService.getSecurityAdvisor();
    if (this.securityAdvisor) {
      this.password = this.securityAdvisor.passwordManager;
      this.vpn = this.securityAdvisor.vpn;
      this.windowsHello = this.securityAdvisor.windowsHello;
    }
  }

  ngOnInit() {
    this.securityAdvisor.refresh();
  }

}
