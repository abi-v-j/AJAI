export const handleChange = (event, setState) => {
    const { name, value } = event.target;
    setState((previous) => ({
      ...previous,
      [name]: value
    }));
  };
  