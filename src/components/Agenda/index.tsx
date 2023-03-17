
import { AgendaDetalhe } from '../AgendaDetalhe'
import './style.css'
export function Agenda() {
    return (
        <>
            <div className='Descricao'>
                <h1> Agenda de Contatos</h1>
            </div>
            <div className='Input' >
                <input type="text" />
            </div>
            <AgendaDetalhe/>
     

        </>
    )


}