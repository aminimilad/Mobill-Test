import { QrReader } from 'react-qr-reader';
import React from 'react';

const Test = (props) => {
    const [data, setData] = React.useState('No result');
  return (
    <div class="QRread">
        <QrReader
            onResult={(result, error) => {
            if (!!result) {
                setData(result?.text);
            }

            if (!!error) {
                console.info(error);
            }
            }}
            style={{ width: '100%' }}
        />
  </div>
  )
}
export default Test;
