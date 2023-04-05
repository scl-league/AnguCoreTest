using System.Net;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// builder.Services.AddCors(opt => opt.AddPolicy("CorsPolicy",
// builder => 
// {
//     builder.AllowAnyMethod().AllowAnyHeader()
//         .WithOrigins("http://localhost:4200")
//         .AllowCredentials();
// }));

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    // app.UseHsts();
}

app.UseHttpsRedirection();
// builder.Services.AddHttpsRedirection(options =>
// {
//     options.RedirectStatusCode = (int)HttpStatusCode.TemporaryRedirect;
//     options.HttpsPort = 5001;
// });

app.UseCors(builder => 
        builder.WithOrigins("http://localhost:4200"));
// app.UseCors("Cors");


app.UseAuthorization();

app.MapControllers();

app.Run();
