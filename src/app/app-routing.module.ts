import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AngularComponent } from './pages/angular/angular.component';
import { DevOpsComponent } from './pages/devops/devops.component';
import { JavaComponent } from './pages/java/java.component';
import { LinuxComponent } from './pages/linux/linux.component';
import { NodejsComponent } from './pages/nodejs/nodejs.component';
import { PowershellComponent } from './pages/powershell/powershell.component';
import { PythonComponent } from './pages/python/python.component';
import { SecurityComponent } from './pages/security/security.component';

const routes: Routes = [
	{
		path: 'angular', component: AngularComponent, data: { pageTitle: 'Angular' }
	},
	{
		path: 'java', component: JavaComponent, data: { pageTitle: 'Java' }
	},
	{
		path: 'nodejs', component: NodejsComponent, data: { pageTitle: 'Node.js' }
	},
	{
		path: 'linux', component: LinuxComponent, data: { pageTitle: 'UNIX/Linux' }
	},
	{
		path: 'security', component: SecurityComponent, data: { pageTitle: 'SSL' }
	},
	{
		path: 'powershell', component: PowershellComponent, data: { pageTitle: 'Windows PowerShell' }
	},
	{
		path: 'python', component: PythonComponent, data: { pageTitle: 'Python' }
	},
	{
		path: 'devops', component: DevOpsComponent, data: { pageTitle: 'DevOps' }
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routeComponents = [AngularComponent, JavaComponent,NodejsComponent, LinuxComponent, SecurityComponent, PowershellComponent, PythonComponent, DevOpsComponent];