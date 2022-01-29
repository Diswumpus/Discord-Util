module.exports = class DjsUtilError extends Error {
    /**
     * @param {String} message 
     * @param {String} header 
     */
    constructor(message, header) {
      if (typeof message != "string")
        throw new DjsUtilError(
          `Expected a string for 'message', recieved ${typeof message}`,
          'INVALID_CONSTRUCTOR_ARGUMENT'
        );
      if (typeof header != "string")
        throw new DjsUtilError(
          `Expected a string for 'header', recieved ${typeof header}`,
          'INVALID_CONSTRUCTOR_ARGUMENT'
        );
  
      super(message);
      this.name = `DjsUtilError [${header}]`;
    }
  }
  
  module.exports.Errors = {
    "INVALID_ARG": "INVALID_ARG",
  }