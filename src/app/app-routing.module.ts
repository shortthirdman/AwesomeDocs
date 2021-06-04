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
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { GitComponent } from './pages/git/git.component';
import { WebSphereComponent } from './pages/websphere/websphere.component';

const routes: Routes = [
	{
		path: '', redirectTo: 'angular', pathMatch: 'full'
	},
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
		path: 'git', component: GitComponent, data: { pageTitle: 'Git' }
	},
	{
		path: 'powershell', component: PowershellComponent, data: { pageTitle: 'Windows PowerShell' }
	},
	{
		path: 'python', component: PythonComponent, data: { pageTitle: 'Python' }
	},
	{
		path: 'devops', component: DevOpsComponent, data: { pageTitle: 'DevOps' }
	},
	{
		path: 'websphere', component: WebSphereComponent, data: { pageTitle: 'IBM WebSphere Application Server' }
	},
	{
		path: '**', component: PageNotFoundComponent, data: { pageTitle: '404 Not Found' }
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, useHash: false, onSameUrlNavigation: "reload" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routeComponents = [AngularComponent, JavaComponent,NodejsComponent, LinuxComponent, SecurityComponent, PowershellComponent, PythonComponent, DevOpsComponent, PageNotFoundComponent, GitComponent, WebSphereComponent];