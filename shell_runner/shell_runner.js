const express = require("express");
const {execSync} = require("child_process");

const router = express.Router();

router.use("/exec",async(req,res,next)=>{
    const query_body = {...req.query, ...req.body};
    const command_options = query_body;

        // console.log({exec_result});
        // res.setHeader("Content-Type","text/html")
        // res.send(exec_result_buffer);
        // res.json({response_str});

    try{
        console.log({"msg":"before execPromise"});
        console.log({query_body});
        const exec_result_buffer = await execPromise(command_options);
        console.log({"msg":"after execPromise"});
        // res.end(`<script>console.log(decodeURIComponent(\`${encodeURIComponent(exec_result_buffer.toString())}\`));</script>`);
        res.end(exec_result_buffer.toString());
    }catch(e){
        res.json({
            e,
            "error_txt":"error running shell"
        });
        throw e;

    }
});

async function execPromise(command_options){
    console.log({"msg":"execPromise start"});
    console.log({command_options});
    
    const {command} = command_options;
    const options = command_options;
    
    console.log({"msg":"execPromise about to run",command_options});
    
    const to_return = execSync(command, options);
    
    console.log({"msg":"execPromise returning"});

    return to_return;
}

module.exports = {
    router
}

// const {
//     cwd,
//     input,
//     stdio,
//     env,
//     shell,
//     uid,
//     gid,
//     timeout,
//     killSignal,
//     maxBuffer,
//     encoding,
//     windowsHide,
// };