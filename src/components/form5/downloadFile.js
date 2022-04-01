import fileSaver from 'file-saver';

export default function DownloadFile() {
    fileSaver.saveAs(process.env.REACT_APP_CLIENT_URL + "../../images/test.odt",
        "test.odt");
}