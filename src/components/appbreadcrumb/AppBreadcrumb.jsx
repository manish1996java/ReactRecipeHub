import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {Breadcrumb} from 'antd';

const {} = Breadcrumb;

const AppBreadcrumb = () => {
    const location  = useLocation();
    console.log('locaiton',location);

    const breadcrumbView = () => {
        // console.log('locaiton',location);
        const {pathname} = location;
        // console.log('pathname',pathname);
        const pathnames = pathname === "/" || "" ? [""] : pathname.split('/');
        // console.log("pathnames",pathnames);
        const paths = pathnames.map((path,i)=>{
            const lastRoute = pathnames[pathnames.length - 1];
            let link;
            // console.log("pathnames",pathnames);
            if(i == 0){
                // console.log('if',pathnames);
                link = "/";
            }else{
                // console.log('else',pathnames.slice(0,i).join('/'));
                link = pathnames.slice(0,i+1).join('/');
            }
            
            // console.log("link",link);
            // console.log("lastRoute:",lastRoute,"--path",path, 'isTrue',lastRoute === path);

            return lastRoute === path ?
             {
                title: path === ''? 'home':path,
            }:{
                title: path === ''? 'home':path,
                href: link
            };
        })

        console.log("paths",paths);
        return (<Breadcrumb separator=">" items={paths}>
        </Breadcrumb>)
        
    }

    return (
        <div>
            {breadcrumbView()}
        </div>
    );
};

export default AppBreadcrumb;