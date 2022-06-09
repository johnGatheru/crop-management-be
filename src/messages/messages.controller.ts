import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Messages } from './messages.entity';
import { MessagesService } from './messages.service';

@Crud({
    model:{
        type: Messages
    }
})
@Controller('messages')
export class MessagesController implements CrudController<Messages>{
    constructor(public service: MessagesService){}
}
