import './Thanks.css'

export default function Thanks(props) {
    return (

        <div>
            <div className='mobill-logo'>
                <img src={require('../../images/mobill.png')} style={{ width: 200, height: 200, position: 'relative', top: props.top, left: props.left, right: props.right }} />
            </div>

            <div className='title-one'>
                Snabbt, enkelt och säkert
            </div>
            <div className='title-two'>
                Parkera med Mobill
            </div>
            <div className='title-three'>
                Ladda ned vår app, Mobill Parkering, och börja betala din parkering med mobilen idag.
            </div>
            <div className='buttons-container'>
                <div className='app-store-btn'>
                    <a href='https://apps.apple.com/se/app/mobill-parkering/id1066302005' >
                        <img src={require('../../images/app-store-badge.png')} width={155} height={52} />
                    </a>
                </div>

                <div className='google-play-btn'>
                    <a href='https://play.google.com/store/apps/details?id=se.mobill.parking&hl=sv'>
                        <img src={require('../../images/google-play-badge.png')} width={170} height={52} />
                    </a>
                </div>
            </div>

        </div >
    )
}
