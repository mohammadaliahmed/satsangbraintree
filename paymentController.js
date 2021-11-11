const braintree = require("braintree");

const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: "ty5m9dd9k9cgwrrf",
  publicKey: "k5khsyzxf4zggpv6",
  privateKey: "3031fd332a4b8f2d102612f37d128ad5"
});
exports.generateToken=(req,res)=>{
 gateway.clientToken.generate({}).then((response)=>{
 	res.status(200).send(response)
 }).catch(err=>res.status(500).send(err))
} 