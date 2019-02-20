const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default (emails) => {
  let invalidEmails = emails.trim();

  while(invalidEmails[invalidEmails.length-1] === ','){
    invalidEmails = invalidEmails.slice(0,-1);
  } //getting rid of trailing commas

  invalidEmails = invalidEmails
  .split(',')
  .map(email => email.trim())
  .filter(email => ! re.test(email));


  if(invalidEmails.length){
    return `These emails are invalid: ${invalidEmails}`;
  }

  return;
};
