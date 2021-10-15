import classes from "./ShowFile.module.css";

function ShowFile(props) {
  // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);
  // const full_url =
  //   "https://cors-anywhere.herokuapp.com/https://www.mathworksheets.com/1st-grade/MathWorksheetsGrade1_11_1.pdf";

  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);
  //   setPageNumber(1);
  // }

  return (
    <div className={classes.background}>
      <iframe
        title={props.location.url}
        className={classes.pdffile}
        src={props.location.url}
        allow="autoplay"
      ></iframe>
      {/* <Document
        className={classes.filefield}
        file={{ url: full_url, Headers: { origin: "running-from-f" } }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <div>
            <p className={classes.pageindex}>Page {index + 1}</p>
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          </div>
        ))}
      </Document> */}
    </div>
  );
}

export default ShowFile;
