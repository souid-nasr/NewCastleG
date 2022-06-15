import ChevronRightIcon from '@material-ui/icons/ChevronRight';
export const Image = ({ title, degrees, largeImage, smallImage }) => {
  return (
    <div className='portfolio-item'>
      <div className='hover-bg'>
        {' '}
        <a
          href={largeImage}
          title={title}
          degrees={degrees} 
          data-lightbox-gallery='gallery1'
        >
          <div className='hover-text'>
            <h4>{title}</h4>
            <h6>{degrees}<ChevronRightIcon /></h6>
          </div>
          <img
            src={smallImage}
            className='img-responsive'
            alt={title}
            style={{height:"300px",width:"400px"}}
          />{' '}
        </a>{' '}
      </div>
    </div>
  )
}