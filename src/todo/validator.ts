// import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
// import { CreateTodoDto } from "./dto/createTodoDto";
// import { todoValidate } from "./todo-validate";

// export class SpaceShipValidatorPipe
//   implements PipeTransform<CreateTodoDto>
// {
//   public transform(
//     query: CreateTodoDto,
//     metadata: ArgumentMetadata,
//   ): CreateTodoDto {
//     const result = todoValidate.validate(query, {
//       convert: true,
//     });

//     if (result.error) {
//       const errorMessages = result.error.details.map((d) => d.message).join();
//       throw new BadRequestException(errorMessages);
//     }

//     const validSpaceShip = result.value;
//     return {
//       title: validSpaceShip.title,
//       description: validSpaceShip.description,
//     } as CreateTodoDto;
//   }
// }


