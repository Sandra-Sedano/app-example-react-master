import './style.css'
//import { AgendaDetalhe } from '../AgendaDetalhe'
type AgendaProps = {
    children: React.ReactNode
}

export function Agenda({ children }: AgendaProps) {
    
    return (
        <>

            <div className='Descricao'>
                {children}
            </div>


        </>
    )


}