import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'git',
        title    : 'GIT',
        translate: 'NAV.GIT',
        type     : 'group',
        children : [
            {
                id       : 'commit-history',
                title    : 'COMMIT HISTORY',
                translate: 'NAV.COMMIT-HISTORY.TITLE',
                type     : 'item',
                url      : '/git/commit-history'
            }
        ]
    }
];
