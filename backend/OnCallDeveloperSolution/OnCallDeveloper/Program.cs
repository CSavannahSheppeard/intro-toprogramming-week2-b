var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

var app = builder.Build();

// Configure the HTTP request pipeline.


app.MapGet("/developer", () =>
{
    var response = new OnCallDeveloperResponse("Savannah Sheppeard", "caitlin_s_sheppeard@progressive.com");
    return Results.Ok(response);
});
app.Run();

public record
    OnCallDeveloperResponse(string Name, string Email);