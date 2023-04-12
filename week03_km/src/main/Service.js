import './Service.css';
import ServiceItem from './ServiceItem';

function Service({title, desc, service}) {
    return (
        <div className='service-container'>
            <h2 className='banner-title'>
                {title}
            </h2>
            <div className='banner-desc'>
                {desc}
            </div>
            <div className='service'>
                {service.list.map((item) => (  
                    <ServiceItem serviceTitle={item.serviceTitle} serviceDesc={item.serviceDesc} button={item.button} />
                ))}
                
            </div>
        </div>
    );
};

export default Service;