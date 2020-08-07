//como implementar esto
import { SchemaDirectiveVisitor } from 'apollo-server-express';

class LengthDirective extends SchemaDirectiveVisitor {
	visitInputFieldDefinition(field) {
	  this.wrapType(field);
	}
  
	visitFieldDefinition(field) {
	  this.wrapType(field);
	}
  
	// Replace field.type with a custom GraphQLScalarType that enforces the
	// length restriction.
	wrapType(field) {
	  if (field.type instanceof GraphQLNonNull &&
		  field.type.ofType instanceof GraphQLScalarType) {
		field.type = new GraphQLNonNull(
		  new LimitedLengthType(field.type.ofType, this.args.max));
	  } else if (field.type instanceof GraphQLScalarType) {
		field.type = new LimitedLengthType(field.type, this.args.max);
	  } else {
		throw new Error(`Not a scalar type: ${field.type}`);
	  }
	}
}

module.exports = LengthDirective;