import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JyoSupermarketApplicationSharedModule } from 'app/shared/shared.module';
import { JyoSupermarketApplicationCoreModule } from 'app/core/core.module';
import { JyoSupermarketApplicationAppRoutingModule } from './app-routing.module';
import { JyoSupermarketApplicationHomeModule } from './home/home.module';
import { JyoSupermarketApplicationEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JyoSupermarketApplicationSharedModule,
    JyoSupermarketApplicationCoreModule,
    JyoSupermarketApplicationHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JyoSupermarketApplicationEntityModule,
    JyoSupermarketApplicationAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class JyoSupermarketApplicationAppModule {}
