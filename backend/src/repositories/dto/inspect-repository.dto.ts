import { IsNotEmpty, IsString, IsUrl } from "class-validator";

export class InspectRepositoryDto {
  @IsString()
  @IsNotEmpty()
  @IsUrl(
    {
      protocols: ["http", "https"],
      require_protocol: true,
    },
    {
      message: "Please enter a valid GitHub repository URL",
    },
  )
  url!: string;
}