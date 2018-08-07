import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from "./not-found/not-found.component";
import { AuthComponent } from "./auth/auth.component";

const routes: Routes = [
    { path: '', component: AuthComponent },
    { path: '**', component: NotFoundComponent },
    { path: 'system', loadChildren: './layout/layout.module#AuthModule' },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }