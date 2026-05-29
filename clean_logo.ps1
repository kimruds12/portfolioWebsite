Add-Type -AssemblyName System.Drawing

$inputPath  = "c:\Users\Kim Ruds Guston\Downloads\portfolioWebsite-1\public\Assets\backgroundRemove_logo.png"
$outputPath = "c:\Users\Kim Ruds Guston\Downloads\portfolioWebsite-1\public\Assets\cleaned_logo.png"

# Load image
$src = New-Object System.Drawing.Bitmap($inputPath)
$w = $src.Width
$h = $src.Height

# Create output bitmap
$dst = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

$rect = New-Object System.Drawing.Rectangle(0, 0, $w, $h)
$srcData = $src.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::ReadOnly,  [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$dstData = $dst.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::WriteOnly, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

$stride = $srcData.Stride
$totalBytes = $stride * $h
$pixels = New-Object byte[] $totalBytes

[System.Runtime.InteropServices.Marshal]::Copy($srcData.Scan0, $pixels, 0, $totalBytes)

# Process each pixel
for ($y = 0; $y -lt $h; $y++) {
    for ($x = 0; $x -lt $w; $x++) {
        $i = ($y * $stride) + ($x * 4)
        
        # If in the bottom-right quadrant (where the star is, e.g., x > 400 and y > 400), set to transparent
        # Just to be safe, let's clear the area x > 450 and y > 450
        if ($x -gt 450 -and $y -gt 450) {
            $pixels[$i]     = 0 # B
            $pixels[$i + 1] = 0 # G
            $pixels[$i + 2] = 0 # R
            $pixels[$i + 3] = 0 # A
        }
    }
}

[System.Runtime.InteropServices.Marshal]::Copy($pixels, 0, $dstData.Scan0, $totalBytes)

$src.UnlockBits($srcData)
$dst.UnlockBits($dstData)

$dst.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)

$src.Dispose()
$dst.Dispose()

Write-Host "Done! Cleaned logo saved to: $outputPath"
