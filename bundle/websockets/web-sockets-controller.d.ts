import { Type } from '@nestjs/common/interfaces/type.interface';
import { ApplicationConfig } from '@nestjs/core/application-config';
import { NestContainer } from '@nestjs/core/injector/container';
import 'reflect-metadata';
import { Observable, Subject } from 'rxjs';
import { WsContextCreator } from './context/ws-context-creator';
import { MessageMappingProperties } from './gateway-metadata-explorer';
import { NestGateway } from './interfaces/nest-gateway.interface';
import { ObservableSocketServer } from './interfaces/observable-socket-server.interface';
import { SocketServerProvider } from './socket-server-provider';
export declare class WebSocketsController {
    private readonly socketServerProvider;
    private readonly container;
    private readonly config;
    private readonly contextCreator;
    private readonly metadataExplorer;
    private readonly middlewareInjector;
    constructor(socketServerProvider: SocketServerProvider, container: NestContainer, config: ApplicationConfig, contextCreator: WsContextCreator);
    hookGatewayIntoServer(instance: NestGateway, metatype: Type<any>, module: string): void;
    subscribeObservableServer(instance: NestGateway, options: any, port: number, module: string): void;
    injectMiddleware({server}: {
        server: any;
    }, instance: NestGateway, module: string): void;
    subscribeEvents(instance: NestGateway, messageHandlers: MessageMappingProperties[], observableServer: ObservableSocketServer): void;
    getConnectionHandler(context: WebSocketsController, instance: NestGateway, messageHandlers: MessageMappingProperties[], disconnect: Subject<any>, connection: Subject<any>): (...args: any[]) => void;
    subscribeInitEvent(instance: NestGateway, event: Subject<any>): void;
    subscribeConnectionEvent(instance: NestGateway, event: Subject<any>): void;
    subscribeDisconnectEvent(instance: NestGateway, event: Subject<any>): void;
    subscribeMessages(messageHandlers: MessageMappingProperties[], client: any, instance: NestGateway): void;
    pickResult(defferedResult: Promise<any>): Promise<Observable<any>>;
    private hookServerToProperties(instance, server);
}