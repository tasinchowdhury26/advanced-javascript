function text()
{
    let speech = "this is it";
    if(speech != null)
    {
        var whoa = "C'mon I'm new";     //using var is less recommended 
        speech = "This is changed";
    }
    console.log(speech);
    console.log(whoa);           //whoa will not be executed , if it's declared with let or const
}
text();

