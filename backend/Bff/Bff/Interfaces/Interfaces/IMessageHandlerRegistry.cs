﻿namespace Bff.Interfaces.Interfaces;

/// <summary>
/// Registry for message handlers
/// </summary>
internal interface IMessageHandlerRegistry
{
    IMessageHandler? GetHandler(string messageType);
    void RegisterHandler(string messageType, IMessageHandler handler);
}
