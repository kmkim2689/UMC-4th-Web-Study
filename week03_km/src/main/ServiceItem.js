import './ServiceItem.css';

function ServiceItem({serviceTitle, serviceDesc, button}) {
    return (
        <div className='service-item'>
            <h3 className='service-title'>
                {serviceTitle}
            </h3>
            <div className='service-desc'>
                {serviceDesc}
            </div>
            <button className='service-button'>
                {button}
            </button>

        </div>
            );
};

export default ServiceItem;