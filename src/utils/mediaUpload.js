import { createClient } from "@supabase/supabase-js"

const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmdnJvanJ5cWh2anVjZ3BlemhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYyNzQ4MjYsImV4cCI6MjA3MTg1MDgyNn0.yW-uuSVy53evylbM6r52Bx_33hhyxXqy0qjSzi7GBl4"

const url = "https://lfvrojryqhvjucgpezhg.supabase.co"

export default function uploadMediaToSupabase(file){

    return new Promise((resolve, reject)=>{
        if(file == null){
            reject("File not added")
        }
          let fileName = file.name
          const extension = fileName.split(".")[fileName.split(".").length -1]

          const supabase = createClient(url,key)
    
          const timestamp =  new Date().getTime()
          fileName = timestamp+"."+extension

          supabase.storage.from("images").upload(fileName, file,{
                cacheControl : "3600",
                upsert : false
            }).then(()=>{
                const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
                resolve(publicUrl)
            }).catch((err)=>{
                reject(err)
            })
    })
       
}

            // if(extension != "jpg" && extension != "png"){
            //     alert("Please select a jpg or png file")
            //     return
            // }
    
            