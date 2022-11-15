/* importação da imagem, pegando a local de outra pasta. */
import icon from '../../assets/img/notification-icon.svg'

import './styles.css'

function NotificationButton() {
    return (
        <div className="dsmeta-red-btn">
            <img src= {icon} alt="Notificar" />
        </div>
    )
}

export default NotificationButton