import image404 from '../../assets/404NotFound.svg'
const NotFound = () => {
    return (
        <div style={{textAlign:'center'}}>
            <img style={{width:'80%'}} src={image404} alt="Notfound this page" />
        </div>
    );
};

export default NotFound;