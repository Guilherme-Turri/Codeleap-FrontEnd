import React from 'react';

const Head = (props) => {
  React.useEffect(() => {
    document.title = 'Codeleap | ' + props.title;
  }, [props]);
  return <></>;
};

export default Head;
