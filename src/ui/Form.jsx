// eslint-disable-next-line react/prop-types
const Form = ({ children, ...props }) => {
  return (
    <form noValidate {...props} style={{ width: '100%', marginTop: '1' }}>
      {children}
    </form>
  );
};

export default Form;
