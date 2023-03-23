import './style.css'
import { Button } from "../../components/Button";
type contactProps = {
    contactData:
}
export function AgendaDetalhe() {
    return (
        <>
            <section className='Dados'>
              

                <img src="https://randomuser.me/api/portraits/men/14.jpg" alt="" />
                <div className='dadosContato'>

                    <p>Nome</p>
                    <p>Email</p>
                    <Button text='Detalhe' type='primary' />

                </div>

            </section>

            <section />



        </>
    )
}