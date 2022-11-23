import React from 'react'
import PropTypes from 'prop-types'

type Props = {
  logo: string
  phone: string
  message: string
  width: number
  height: number
}
const WhatsappButton = ({ logo, phone, message, width, height }: Props) => {
  const formattedMessage = message.replace(/ /g, '%20')
  console.log('Mi mensaje formateado es', formattedMessage, logo)

  return (
    <>
      <div className="fixed bottom-2 right-2 flex flexColumn">
        <a
          href={`https://wa.me/${phone}?text?=${formattedMessage}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src={logo}
            width={width}
            height={height}
            alt="Logo de whatsapp"
          />
        </a>
      </div>
    </>
  )
}

WhatsappButton.propTypes = {
  logo: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string,
  width:PropTypes.number,
  height:PropTypes.number
}

WhatsappButton.defaultProps = {
  logo: 'mi-logo',
  phone: '3333333333',
  message: 'Easy whatsapp',
}

WhatsappButton.schema = {
  title: 'Botón de Whatsapp',
  type: 'object',
  properties: {
    logo: {
      title: 'Logo de Whatsapp',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
    phone: {
      title: 'Teléfono',
      description: 'Agrega un número de teléfono',
      type: 'string',
    },
    message: {
      title: 'Mensaje',
      description: 'Agrega un mensaje',
      type: 'string',
      widget: {
        'ui:widget': 'textarea',
      },
    },
    width: {
      title: 'Teléfono',
      description: 'Agrega un número de teléfono',
      type: 'number',
    },
    height: {
      title: 'Teléfono',
      description: 'Agrega un número de teléfono',
      type: 'number',
    },
  },
}
export default WhatsappButton
