import { ubuntu } from '@/app/ui/fonts';

export default function customersPage(){
    return(
        <main className="flex min-h-screen flex-col p-6">
            <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
                <p className={`${ubuntu.className } antialiased text-3xl font-semibold md:text-3xl text-white`}> 
                 Customers Page 
                </p>
            </div>
        </main>
    );
}