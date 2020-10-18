import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';
import { GitModule } from 'app/components/git/git.module';

const routes = [
    {
        path        : 'git',
        loadChildren: './git/git.module#GitModule'
    }
];

@NgModule({
    imports     : [
        RouterModule.forChild(routes),
        FuseSharedModule,
        GitModule
    ]
})
export class ComponentsModule
{
}
